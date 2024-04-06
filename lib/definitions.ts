export type ProductType = {
    id: number,
    seller: string,
    category: string,
    name: string,
    desc: string,
    image: string,
    price: number,
    quantity: number,
    create_at: Date,
    updata_at: Date
}

// initialize the value to the type of product post
export type initialValues = {
	categoryName: "",
	categoryIcon: "",
	name: "",
	desc: "",
	image: "",
	price: 0,
	quantity: 0,
	fileIcon: null,
	fileProduct: null,
};