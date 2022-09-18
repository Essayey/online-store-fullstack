import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' },
            { id: 3, name: 'Гарнитура' },
            { id: 4, name: 'Переферия' },
            { id: 5, name: 'Камеры' },
            { id: 6, name: 'Принтеры' },
        ]
        this._brands = [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Xiaomi' },
        ]
        this._devices = [
            { id: 1, name: 'iPhone 12 pro', price: 109000, rating: 5, img: 'https://static.eldorado.ru/photos/mv/Big/30064946bb.jpg' },
            { id: 2, name: 'iPhone 12 pro', price: 109000, rating: 5, img: 'https://static.eldorado.ru/photos/mv/Big/30064946bb.jpg' },
            { id: 3, name: 'iPhone 12 pro', price: 109000, rating: 5, img: 'https://static.eldorado.ru/photos/mv/Big/30064946bb.jpg' },
            { id: 4, name: 'iPhone 12 pro', price: 109000, rating: 5, img: 'https://static.eldorado.ru/photos/mv/Big/30064946bb.jpg' },
            { id: 5, name: 'iPhone 12 pro', price: 109000, rating: 5, img: 'https://static.eldorado.ru/photos/mv/Big/30064946bb.jpg' },
            { id: 6, name: 'iPhone 12 pro', price: 109000, rating: 5, img: 'https://static.eldorado.ru/photos/mv/Big/30064946bb.jpg' },
            { id: 7, name: 'iPhone 12 pro', price: 109000, rating: 5, img: 'https://static.eldorado.ru/photos/mv/Big/30064946bb.jpg' },
            { id: 8, name: 'iPhone 12 pro', price: 109000, rating: 5, img: 'https://static.eldorado.ru/photos/mv/Big/30064946bb.jpg' },
            { id: 9, name: 'iPhone 12 pro', price: 109000, rating: 5, img: 'https://static.eldorado.ru/photos/mv/Big/30064946bb.jpg' },
            { id: 10, name: 'iPhone 12 pro', price: 109000, rating: 5, img: 'https://static.eldorado.ru/photos/mv/Big/30064946bb.jpg' },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setTypes(brands) {
        this._brands = brands;
    }

    setTypes(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}