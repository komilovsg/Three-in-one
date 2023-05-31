
import { Link } from "react-router-dom";
import profile from "../img/profile-img.png";

import react, { useEffect, useState } from "react";



export default function UserCards({userss}) {
  
      
    const [users, setCardOfUsers] = useState(userss);
    
    //______________________ FUNCTION REMOVE_______________________
      function remove(id) {
        setCardOfUsers(users.filter((el) => el.id !== id));
      }
    
    //______________________ FUNCTION BTN FILTER PROFILE_______________________
    function buttonFilterProfile() {
      setCardOfUsers(userss.filter((user) => user.fullName === "Ivan"));
    }  
    //______________________ FUNCTION BTN FILTER PROFILE_______________________
    function buttonFilterProfile1() {
      setCardOfUsers(userss.filter((user) => user.fullName === "Aleksey"));
    }  
    //______________________ FUNCTION BTN FILTER PROFILE_______________________
      function buttonFilterProfile2() {
        setCardOfUsers(userss.filter((user) => user.fullName === "Maksim"));
      }
    
    //______________________ FUNCTION BTN SORT AGE_______________________
      function buttonSortAge() {
        setCardOfUsers([...userss].sort((a, b) => (a.age > b.age ? 1 : -1)));
      }
    
    //______________________ FUNCTION BTN ADD CARDS_______________________
      function buttonAddCards() {
        setCardOfUsers([
          ...users,
          {
            id: Math.random(),
            img: profile,
            fullName: "Тренировка",
            skills: "Bank",
            text: "Привести себя в порядок за 21 день.",
            age: "30",
          },
        ]);
        console.log(users);
      }
    
      
      const [newEditCard, setEditCard] = useState({
        id: Math.random(),
        img: profile,
        fullName: "",
        skills: "",
        text: "",
       
      });
      console.log(newEditCard);
    
    
    //______________________ FUNCTION CRT NEW CARD_______________________
      function buttonCreateNewCard() {
        setCardOfUsers([...users, newEditCard]);
        console.log(users);
          
      }

      function handleEditKeyDown(event) {
        if (event.keyCode === 13){
          event.preventDefault();
          buttonCreateNewCard();
        }
      }

  return (
    <div>
        {/* --------------------------CHAPTER BTN SOTR------------------------------------------ */}
      <div className="flex justify-center items-center mt-5">
        <div>
          <button
            onClick={buttonFilterProfile}
            className="border-2 border-black mt-5 px-5 py-2 font-semibold hover:shadow-md hover:shadow-indigo-800"
          >
            Иван
          </button>
          <button
            onClick={buttonFilterProfile1}
            className="border-2 border-black mt-5 px-5 py-2 ml-5 font-semibold hover:shadow-md hover:shadow-indigo-800"
          >
            Алексей
          </button>
          <button
            onClick={buttonFilterProfile2}
            className="border-2 border-black mt-5 px-5 py-2 ml-5 font-semibold hover:shadow-md hover:shadow-indigo-800"
          >
            Максим
          </button>
          <button
            onClick={() => setCardOfUsers(userss)}
            className="border-2 border-black mt-5 px-5 py-2 ml-5 bg-indigo-400 font-semibold hover:shadow-md hover:shadow-indigo-800"
          >
            Reset
          </button>
          <button
            onClick={buttonSortAge}
            className="border-2 border-black mt-5 px-5 py-2 ml-5 font-semibold hover:shadow-md hover:shadow-indigo-800"
          >
            Сортировка по возрасту
          </button>
          <button
            onClick={buttonAddCards}
            className="border-2 border-black mt-5 px-5 py-2 ml-5 font-semibold hover:shadow-md hover:shadow-indigo-800"
          >
            Add Card
          </button>

{/*----------------------------------------------------CHAPTER Here you can create your own TODO List! ---------------------------------------*/}

          <div className="flex justify-center items-center">
            <div className="mt-10 flex flex-col justify-center items-center gap-4 w-1/2 border-2 py-5 border-cyan-800 shadow-indigo-300 shadow-2xl">
              <h1 className="py-5">Here you can create <br /> your own PROFILE!</h1>
              <p>
                1
                <input
                  onChange={(e) =>
                    setEditCard({ ...newEditCard, fullName: e.target.value })
                  }
                  className="border-2 h-12 px-5 border-indigo-700 ml-5 hover:scale-105  transition-all"
                  type="text"
                  placeholder="Your FullName"
                  onKeyDown={handleEditKeyDown} //Add press "Enter"
                />
              </p>
              <p>
                2
                <input
                  onChange={(e) =>
                    setEditCard({ ...newEditCard, skills: e.target.value })
                  }
                  className="border-2 h-12 px-5 border-indigo-700 ml-5 hover:scale-105  transition-all"
                  type="text"
                  placeholder="Your Profile"
                  onKeyDown={handleEditKeyDown} //Add press "Enter"
                />
              </p>
              <p>
                3
                <input
                  onChange={(e) =>
                    setEditCard({ ...newEditCard, text: e.target.value })
                  }
                  className="border-2 h-12 px-5 border-indigo-700 ml-5 hover:scale-105  transition-all"
                  type="text"
                  placeholder="Your TEXT"
                  onKeyDown={handleEditKeyDown} //Add press "Enter"
                />
              </p>
              <p>
                4
                <input
                  onChange={(e) =>
                    setEditCard({ ...newEditCard, age: e.target.value })
                  }
                  className="border-2 h-12 px-5 border-indigo-700 ml-5 hover:scale-105  transition-all"
                  type="text"
                  placeholder="Your AGE"
                  onKeyDown={handleEditKeyDown} //Add press "Enter"
                />
              </p>
              <button
                onClick={buttonCreateNewCard}
                className="border-2 border-black mt-5 px-4 py-1 ml-5 font-semibold hover:shadow-md hover:shadow-indigo-800 hover:scale-105 transition-all"
              >
                CREATE
              </button>
            </div>
          </div>
        </div>
      </div>

{/* ------------------------------------CHAPTER CARDS----------------------------------------------- */}
      <div><h1 className="flex justify-center items-center mt-10 text-center font-bold text-green-900 mb-10 text-4xl">
      <h1 className="hover:scale-125 transition-all">T</h1>
      <h1 className="hover:scale-125 transition-all">O</h1> 
      <h1 className="hover:scale-125 transition-all ml-2">D</h1>
      <h1 className="hover:scale-125 transition-all">O</h1> 
      <h1 className="hover:scale-125 transition-all ml-2">L</h1>
      <h1 className="hover:scale-125 transition-all">I</h1>
      <h1 className="hover:scale-125 transition-all">S</h1>
      <h1 className="hover:scale-125 transition-all">T</h1></h1></div>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {users.map((user) => (
          
          <div
            kay={user.id}
            className="border-2 w-1/6 mb-20 border-black text-center rounded-2xl pt-3 bg-slate-400 hover:scale-105 transition-all shadow-2xl shadow-slate-600"
          >
            
            <div className="flex justify-center items-center">
            <img className="border-2 border-slate-500 rounded-lg" src={user.img} />
            </div>
            <div className="my-3 text-center">
            <h2>{user.fullName}</h2>
            <h2>{user.skills}</h2>
            <h2>{user.text}</h2>
            
            <h2>{user.age}</h2>
            <div className="flex items-center justify-center">
              <button
                onClick={() => remove(user.id)}
                className="border-2 border-black px-4 mt-4 bg-red-300 font-bold text-xs hover:scale-125 transition-all"
              >
                Delete
              </button>
            
              <button 
              className="border-2 border-black px-4 mt-4 bg-red-300 font-bold text-xs ml-5 hover:scale-125 transition-all">
                Edit
              </button>
            
            <Link to={`/usercards/view/${user.id}`}><button className="border-2 border-black px-4 mt-4 bg-red-300 font-bold text-xs ml-5 hover:scale-125 transition-all">
                View
              </button></Link>
              
             
            </div></div>
          </div>
        ))}
      </div>
    </div>
  );



    
  
}
