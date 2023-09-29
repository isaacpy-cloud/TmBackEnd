const mongoose = require('mongoose')



const TranferSchema = new mongoose.Schema({
    ucus_bilgisi: {
        type:String,
        required: true
    },
    transfer_giris_tarihi:{
        type:String,
        required:true
    },
    tarih: {
        type: String,
        required:true
    },
    transfer_detay: {
        type:String,
        required: true
    },
    tedarikci: {
        type:String,
        required: true
    },
    alt_tedarikci: {
        type:String,
        required: true
    },
    durum: {
        type:String,
        required: true
    },
    kalkis: {
        type:String,
        required: true
    },
    varis: {
        type:String,
        required: true
    },
    musteri_adi: {
        type:String,
        required: true
    },
    musteri_tel: {
        type:String,
        required: true
    },
    kisi: {
        type:String,
        required: true
    },
    sofor: {
        type:String,
        required: true
    },
    acente_fiyat: {
        type:String,
        required: true
    },
    alt_tedarikci_fiyat: {
        type:String,
        required: true
    },
    ek_hizmet: {
        type:String,
        required: true
    },
    yolcu_tahsilat: {
        type:String,
        required: true
    },
    musteri_notu: {
        type:String,
        required: true
    },
    rezervasyon_numarasi: {
        type:String,
        required: true
    },
})


module.exports = mongoose.model("transferintegrations", TranferSchema)

