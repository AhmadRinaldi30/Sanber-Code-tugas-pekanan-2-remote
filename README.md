Tugas Pekanan 2 Javascript "Membuat program sederhana javascript menggunakan perulangan for"
1. (soal1.js) Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
- Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
- Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
Hint : gunakan rumus sqrt(x)

source program sebagai berikut :
![image](https://github.com/user-attachments/assets/0c5c2b95-67e8-4053-92e0-b49673120cac)
- melakukan running, input perintah berikut pada terminal :
![image](https://github.com/user-attachments/assets/f5f660b9-8642-40d6-9c7f-759dcacf3753)
- result running sebagai berikut :
![image](https://github.com/user-attachments/assets/de0c415d-0a3a-46a7-bc7e-e7486cceab29)

2. (soal2.js) Misalkan terdapat response API sebagai berikut. 

let productBin = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
}
Sebagai QA Engineer kalian ingin mengecek total quantity  dari bebarapa storageId untuk productCode FBR00040101 (FloBrand-DressBSPink). Buatlah sebuah program javascript untuk menjumlahkan quantity dari semua storageId untuk produk tersebut 

source program sebagai berikut :
![image](https://github.com/user-attachments/assets/14e6880c-14ca-4151-a357-afb9a59839b5)
- melakukan running, input perintah berikut pada terminal :
![image](https://github.com/user-attachments/assets/a4364dcc-17f9-4a06-ae0e-1c69d76bf194)
- result running sebagai berikut :
![image](https://github.com/user-attachments/assets/b164cd8c-8add-44f0-93c9-efc76e8448b9)


