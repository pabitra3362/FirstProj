import {createSlice} from '@reduxjs/toolkit'


const initialState={
    value:[
        {
          _id: '66e7eedfc5c10f4882d4ebda',
          image: 'https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?t=st=1726415615~exp=1726419215~hmac=43cd4c55041516e1c9f35e9d43549910fed04ab3c8b373f289e26c80d2bd54cb&w=1060',   
          title: 'Gaming Setup',
          text: 'An advanced gaming setup featuring neon lighting and a high-tech keyboard.',
          count: 1,
          price: 1200
        },
        {
          _id: '66e7eedfc5c10f4882d4ebdf',
          image: 'https://img.freepik.com/free-photo/modern-office-desk-computer-laptop_1150-11413.jpg',
          title: 'Office Desk',
          text: 'A modern office desk setup with a computer, laptop, and organized workspace.',
          count: 1,
          price: 1300
        },
        {
          _id: '66e7eedfc5c10f4882d4ebdb',
          image: 'https://img.freepik.com/free-photo/man-wearing-vr-glasses-gaming_23-2151138370.jpg?t=st=1726480026~exp=1726483626~hmac=2e62985b8647d929315c8195aea9d0c77090ff97330d6706c7648420f645e414&w=1060',
          title: 'Modern Dining Room',
          text: 'A sleek, modern dining room with stylish furniture and elegant decor.',
          count: 1,
          price: 800
        },
        {
          _id: '66e7eedfc5c10f4882d4ebe3',
          image: 'https://img.freepik.com/free-photo/smoothie-healthy-drink-fruits_1150-5884.jpg',
          title: 'Fruit Smoothie',
          text: 'A refreshing fruit smoothie made with a variety of healthy and juicy fruits.',
          count: 1,
          price: 550
        },
        {
          _id: '66e7eedfc5c10f4882d4ebe2',
          image: 'https://img.freepik.com/free-photo/modern-kitchen-interior_1150-11471.jpg',
          title: 'Modern Kitchen',
          text: 'A stylish and contemporary kitchen design with high-end appliances and clean lines.',
          count: 1,
          price: 1450
        },
        {
          _id: '66e7eedfc5c10f4882d4ebdc',
          image: 'https://img.freepik.com/free-photo/beautiful-view-beach-sea-sky_1150-14669.jpg',
          title: 'Beach View',
          text: 'A picturesque view of a sandy beach with crystal-clear waters and a bright sky.',
          count: 1,
          price: 600
        },
        {
          _id: '66e7eedfc5c10f4882d4ebe0',
          image: 'https://img.freepik.com/free-photo/colorful-painting-canvas_1150-11742.jpg',
          title: 'Colorful Painting',
          text: 'A vibrant and abstract painting on canvas with bold colors and dynamic shapes.',
          count: 1,
          price: 750
        },
        {
          _id: '66e7eedfc5c10f4882d4ebe5',
          image: 'https://img.freepik.com/free-photo/fitness-gym-equipment_1150-12456.jpg',
          title: 'Gym Equipment',
          text: 'A variety of fitness gym equipment arranged for a complete workout experience.',
          count: 1,
          price: 920
        },
        {
          _id: '66e7eedfc5c10f4882d4ebe1',
          image: 'https://img.freepik.com/free-photo/sunset-mountains-landscape_1150-15605.jpg',
          title: 'Mountain Sunset',
          text: 'A breathtaking view of mountains at sunset, with rich colors and dramatic shadows.',
          count: 1,
          price: 1100
        },
        {
          _id: '66e7eedfc5c10f4882d4ebdd',
          image: 'https://img.freepik.com/free-photo/fresh-healthy-salad-wooden-table_1150-3881.jpg',
          title: 'Healthy Salad',
          text: 'A vibrant and fresh salad full of colorful vegetables and healthy ingredients.',
          count: 1,
          price: 500
        },
        {
          _id: '66e7eedfc5c10f4882d4ebde',
          image: 'https://img.freepik.com/free-photo/cozy-living-room-interior_1150-15367.jpg',
          title: 'Cozy Living Room',
          text: 'A warm and inviting living room with comfortable seating and homey decor.',
          count: 1,
          price: 950
        },
        {
          _id: '66e7eedfc5c10f4882d4ebe4',
          image: 'https://img.freepik.com/free-photo/elegant-wedding-dress-hanger_1150-12345.jpg',
          title: 'Wedding Dress',
          text: 'An elegant wedding dress displayed on a hanger, showcasing.',
          count: 1,
          price: 1350
        }
      ],
}
 export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.value=action.payload
        },
       
    }
})

export const {addProduct}=productSlice.actions

export default productSlice.reducer