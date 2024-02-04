import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { Title, Table, Th, Td, Button } from "./index.styles"

export default function index() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://auth-rg69.onrender.com/api/products/all")
      .then(res => res.json())
      .then((data) => {
        setData(data)

      }).catch((err) => {
        console.log(err);
      })
  })
  function handleDelete(id) {
    let isDelete = confirm("Rosdan ham o'chirmoqchimisiz..")
    if (isDelete) {
      fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.message == "Mahsulot muvaffaqiyatli o'chirildi") {
            let copied = JSON.parse(JSON.stringify(data))
            copied = copied.filter(el => {
              return el.id != id
            })
            setData(copied)
          }
        })
    }
  }
  return (
    <>
      <Title>MAHSULOTLAR</Title>
      <Table>
        <tr >
          <Th>№</Th>
          <Th>Nomi</Th>
          <Th>Narxi</Th>
          <Th>Izox</Th>
          <Th>Amallar</Th>
        </tr>
        {
          data.map((phone, index) => {
            return (
              <tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{phone.name}</Td>
                <Td>{phone.price}</Td>
                <Td>{phone.description}</Td>
                <Td><Button onClick={() => { handleDelete(phone.id) }}>O'chirish</Button></Td>
              </tr>
            )
          })
        }


      </Table>

    </>
  )
}
