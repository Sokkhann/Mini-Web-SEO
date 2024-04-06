"use client"
import { ProductType } from '@/lib/definitions'
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from "react-data-table-component";
import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import Loading from '@/app/(user)/loading';
import {ACCESS_TOKEN } from '@/lib/constant';


// here is the place where we get the data
const ENDPOINT = "https://store.istad.co/api/products/"

export default function Page() {

	// ths is the use state for products that we fetch from api
	// after fetch we can set the data into setProducts to update the products
	// for the type is ProductType it is the array
	// the ProductsType is the type of data that will be store in state import form lib(definitinos)
    const [products, setProducts] = useState<ProductType[]>([])

	// this is use for set modal for show to detail product when the use click on button view on admin side
	// we set the useState(false) cuz at first we want it hidden
	const [openModal, setOpenModal] = useState(false);

	// this useState we use to set the value to the detail product
	// whenever the admin click on button view it take only name, image, and description in the card detail
	// for ProductType | null it means that can be stored the value of product type or can be null
	const [productDetail, setProductDetail] = useState<ProductType | null>(null);

	const [loading, setLoading] = useState(true);
	
	const [deleteProductId, setDeleteProductId] = useState<string | null>(null); // Track the product ID to delete
  	const [deleteModal, setDeleteModal] = useState(false);

	  const [openEditModal, setOpenEditModal] = useState(false);






	  const [editingProduct, setEditingProduct] = useState<ProductType | null>(null);
const [editedName, setEditedName] = useState<string>('');
const [editedDesc, setEditedDesc] = useState<string>('');
const [editedImage, setEditedImage] = useState<string>(''); // Assuming image is a string URL
const [editedPrice, setEditedPrice] = useState<number>(0); // Assuming price is a number
const [editedCategory, setEditedCategory] = useState<string>('');


const handleEditProduct = (product: ProductType) => {
    setEditingProduct(product);
    setEditedName(product.name);
    setEditedDesc(product.desc);
    setEditedImage(product.image);
    setEditedPrice(product.price);
    setEditedCategory(product.category);
    setOpenEditModal(true);
};


const handleUpdateProduct = async () => {
    try {
        const updatedProductData = {
            name: editedName,
            desc: editedDesc,
            image: editedImage,
            price: editedPrice,
            category: editedCategory,
        };

        const res = await fetch(`${ENDPOINT}${editingProduct?.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            body: JSON.stringify(updatedProductData),
        });

        if (res.ok) {
            console.log(`Product with ID ${editingProduct?.id} updated successfully.`);
            alert('Product updated successfully.');
            setOpenEditModal(false);
            // Optionally, you may want to fetch data again after updating to refresh the UI
            // fetchData();
        } else {
            const errorData = await res.json(); // Parse error response
            const errorMessage = errorData.message || 'Unknown error'; // Handle undefined error message
            console.error(`Failed to update product with ID ${editingProduct?.id}: ${errorMessage}`);
            alert(`Failed to update product with ID ${editingProduct?.id}: ${errorMessage}`);
        }
    } catch (error) {
        console.error('An error occurred while updating the product:', error);
        alert('An error occurred while updating the product. Please try again later.');
    }
};



	// for set image whenever the image that we get from api doesn't exist
	const [imagePlaceholder, setImagePlaceholder] = useState<string>(
		"https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
	);


    // fetch data from api
    useEffect(() => {
        fetch(ENDPOINT)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.results)
			setLoading(false);
			// console log if the data we get the right from api
            // console.log("Here are the data we have fetched")
            // products.forEach((product: any) => {
            //     console.log(product);
            // });
        })
    }, [])

	// this method is handle on the view button
	// for showing the modal whenever the admin click on the view button
	// as the args we get the ProductType
	const handleViewProduct = (product: ProductType) => {
		// set the value of ProductType into the productDetail and we can use in the modal to show the data we want to show
		setProductDetail(product);
		// set the modal as the initailize value we set it to false(hide) so when click it true(show)
		setOpenModal(true);
	};

	const handleDeleteProduct = async (productId: string) => {
		setDeleteModal(!deleteModal)
		try {
			const res = await fetch(`${ENDPOINT}${productId}/`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${ACCESS_TOKEN}`,
				},
			});
	
			if (res.ok) {
				console.log(`Product with ID ${productId} deleted successfully.`);
				alert("Product deleted successfully.");
			} else {
				console.error(`Failed to delete product with ID ${productId}.`);
				alert(`You cannot Delete The Product with ID ${productId} Not Yours.`);
			}
		} catch (error) {
			console.error("An error occurred while deleting the product:", error);
		}
	};
	

	// this is we use library(netify)
	// for using data table with api
    const columns: TableColumn<ProductType>[] = [
		{
			name: "Product Title",
			selector: (row: any) => row.name,
		},
		{
			name: "Price (USD)",
			selector: (row: any) => row.price,
			sortable: true,
		},
		{
			name: "Image",
			selector: (row: any): any => (
				<img className="w-16 h-16" src={row.image} alt={row.image} />
			),
			sortable: true,
		},
		{
			name: "Category",
			selector: (row: any) => row.category,
			sortable: true,
		},
		{
			name: "Action",
			selector: (row: any) => (
				<div>
					<button 
						onClick={() => {
                            setDeleteProductId(row.id);
                            setDeleteModal(true);
                        }}
                        className="bg-red-600 px-4 py-2 text-white rounded-lg mx-2"
                    	>delete</button>
					<button
						onClick={() => handleViewProduct(row)}
						className="bg-blue-600 px-4 py-2 text-white rounded-lg mx-2"
					>
						view
					</button>
					<button 
						onClick={() => handleEditProduct(row)}
						className="bg-yellow-400 px-4 py-2 text-white rounded-lg mx-2">edit</button>
				</div>
			),
		},

	];

  return (
    <main className='h-screen'>
		{loading ? (
			<Loading/>
		) : (
			<DataTable
				fixedHeader
				columns={columns}
				data={products}
				customStyles={customStyles}
				striped
			/>
		)}

	<Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
        <Modal.Header>Confirmation</Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this product?
        </Modal.Body>
        <Modal.Footer>
          <Button className='bg-green-600' onClick={() => setDeleteModal(false)}>Cancel</Button>
          <Button className='bg-red-600' onClick={() => {
                        setDeleteModal(false);
                        if (deleteProductId) {
                            handleDeleteProduct(deleteProductId);
                        }
                    }}>
                        Delete
                    </Button>
        </Modal.Footer>
      </Modal>

		<Modal show={openModal} onClose={() => setOpenModal(false)}>
			<Modal.Header>Product Detial</Modal.Header>
			<Modal.Body>
				<div className="space-y-6">
					<Image
						src={productDetail?.image || imagePlaceholder}
						alt={productDetail?.name || "No name"}
						width={250}
						height={300}
						className="mx-auto rounded-lg"
					/>
					<h3 className="text-3xl text-gray-700">{productDetail?.name || "No Name"}</h3>
					<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
						{productDetail?.desc || "No description"}
					</p>
				</div>
			</Modal.Body>
		</Modal>


		<Modal show={openEditModal} onClose={() => setOpenEditModal(false)}>
    <Modal.Header>Edit Product</Modal.Header>
    <Modal.Body>
    {/* Form to edit product data */}
    <div className="space-y-4">
        <div className="flex flex-col">
            <label htmlFor="editedName" className="text-sm font-medium">Product Name:</label>
            <input
                type="text"
                id="editedName"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="editedDesc" className="text-sm font-medium">Product Description:</label>
            <input
                type="text"
                id="editedDesc"
                value={editedDesc}
                onChange={(e) => setEditedDesc(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
        
        <div className="flex flex-col">
            <label htmlFor="editedPrice" className="text-sm font-medium">Product Price:</label>
            <input
                type="number"
                id="editedPrice"
                value={editedPrice}
                onChange={(e) => setEditedPrice(parseFloat(e.target.value))}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="editedCategory" className="text-sm font-medium">Product Category:</label>
            <input
                type="text"
                id="editedCategory"
                value={editedCategory}
                onChange={(e) => setEditedCategory(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
    </div>
</Modal.Body>

    <Modal.Footer>
        <Button onClick={handleUpdateProduct}>Update</Button>
        <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
    </Modal.Footer>
</Modal>
    </main>
  )
}

const customStyles = {
	rows: {
		style: {
			minHeight: "72px",
		},
	},
	headCells: {
		style: {
			paddingLeft: "12px",
			paddingRight: "8px",
			fontSize: "1.2rem",
			backgroundColor: "#f1f1f1",
		},
	},
	cells: {
		style: {
			paddingLeft: "12px",
			paddingRight: "8px",
		},
	},
};

