import React, { useState } from 'react'
import styled from 'styled-components'

import { getProductByCode } from '../services/open-food-service'
import Camera from './Camera'
import Nutrient from './Nutrient'

const Title = styled.h1`
    text-align: center;
    margin: 4rem 0;
`

const Barcode = styled.h3`
    font-weight: bold;
    text-align: center;
`

const NutrientsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto;
`

const Page = () => {
    const [barcode, setBarcode] = useState('')
    const [productData, setProductData] = useState(null)

    const setBarcodeFunc = async (barcodeData) => {
        if (barcodeData && barcodeData !== barcode) {
            setBarcode(barcodeData)
            const data = await getProductByCode(barcodeData)
            if (data && data.product) {
                setProductData(data.product.nutriments)
            }
        }
    }

    return (
        <div className="container">
            <Title>Nutritions App</Title>
            <Camera setBarcode={setBarcodeFunc}/>
            <Barcode>{barcode}</Barcode>
            {
                productData && (
                    <NutrientsContainer>
                        <Nutrient label="Calories" value={productData['energy-kcal']}/>
                        <Nutrient label="Fat" value={productData.fat} unit={productData.fat_unit} />
                        <Nutrient label="Carbohydrates" value={productData.carbohydrates} unit={productData.carbohydrates_unit} />
                        <Nutrient label="Proteins" value={productData.proteins} unit={productData.proteins_unit} />
                        <Nutrient label="Saturated Fat" value={productData['saturated-fat']} unit={productData['saturated-fat_unit']} />
                        <Nutrient label="Sugars" value={productData.sugars} unit={productData.sugars_unit} />
                        <Nutrient label="Salt" value={productData.salt} unit={productData.salt_unit} />
                        <Nutrient label="Sodium" value={productData.sodium} unit={productData.sodium_unit} />
                    </NutrientsContainer>
                )
            }

        </div>
    );
}

export default Page
