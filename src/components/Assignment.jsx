import React, { useState } from 'react'

const Assignment = () => {

    const[game, setGame] = useState({
        id: 1,
        player: {
            name: 'John'
        }
    });
    const upDatePlayer = () =>{
        const newGame = {...game, player: {...game.player, name: "Smith"}};
        setGame(newGame);
    };

    const[player, setPlayer] = useState({
        name: 'Rashford',
        skills: ['Shooting', 'Dribling']
    });

    const upDateSkill =()=>{
        const newPlayer = {...player, skills: [...player.skills, 'Finishing']};
        setPlayer(newPlayer);
        console.log(player)
    }

    const[cart, setCart] = useState({
        store: "Jumia",
        items: [
            {id: 1, name: "Samsung", quantity: 1},
            {id: 2, name: "iPhone", quantity: 1},
            {id: 3, name: "Headset", quantity: 1}
        ]
    });

    const updateCart = () => {
        const updatedCart = {...cart, items: cart.items.map(item => {
           return item.id == 2 ? {...item, quantity: item.quantity +1} : item
        })};

        setCart(updatedCart);
        console.log(cart)
    }

    return (
        <div>
            <p>{game.player.name}</p>
            <button onClick={upDatePlayer}>Update</button>
            <button onClick={upDateSkill}>Add Skill</button>
            <button onClick={updateCart}>increment quant</button>
        </div>
    )
}

export default Assignment;