import Head from 'next/head';
import CardDetail from '@/component/card/CardDetail';
import React from 'react';
import { ENDPOINT } from '@/lib/constant';
import { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};
const getData = async (id: string) => {
	const res = await fetch(`${ENDPOINT}api/products/${id}`);
	const data = await res.json();
	console.log(data);
	return data;
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const id = params.id;

	// fetch data
    const product = await fetch(`${ENDPOINT}api/products/${id}`).then((res) => res.json());

	return {
		title: product.title,
		description: product.description,
		openGraph: {
			images: product.image,
		},
	};
}

export default async function Detail(props: Props) {
	let data = await getData(props.params.id);
	console.log(data)

	return (
		<div className="h-screen grid place-content-center">
			<CardDetail
				name={data?.name || "NoTitle"}
				desc={data?.desc || "No Description"}
				image={
					data?.image ||
					"https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
				}
			/>
		</div>
	);
}
