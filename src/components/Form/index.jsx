import React from 'react'
import { Form, Title, Input, Leabel, Textarea, Button } from './index.styles'
import { useRef, } from 'react'

export default function index() {
    const priceRef = useRef()
    const nameRef = useRef()
    const descRef = useRef()

    function validate() {
        if (!nameRef.current.value) {
            alert("Nomi kiritilishi shart")
            nameRef.current.focus()
            return false
        }
        if (!priceRef.current.value) {
            alert("Narx kiritilishi shart")
            priceRef.current.focus()
            return false
        }
        if (!descRef.current.value) {
            alert("Izox kiritilishi shart")
            descRef.current.focus()
            return false
        }
        return true
    }

    function handleSubmit() {
        if (validate()) {
            let creatCard = {
                name: `${nameRef.current.value}`,
                description: `${descRef.current.value}`,
                status: `active`,
                price: priceRef.current.value,
                category_id: "2"
            }

            fetch("https://auth-rg69.onrender.com/api/products", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(creatCard),
            })
            nameRef.current.value = ''
            priceRef.current.value = ''
            descRef.current.value = ''
        }
    }

    return (
        <Form>
            <Title>MAHSULOT QO'SHISH</Title>
            <Leabel>Mahsulot nomini kiriting *</Leabel>
            <Input ref={nameRef} type="text" />
            <Leabel>Mahsulot narxini kiriting *</Leabel>
            <Input ref={priceRef} type="number" />
            <Leabel>Izox kiriting *</Leabel>
            <Textarea ref={descRef} cols="30" rows="10"></Textarea>
            <Button onClick={handleSubmit}>SAQLASH</Button>
        </Form>
    )
}
