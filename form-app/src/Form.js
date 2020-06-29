import React, {useState} from 'react'

function Form(){
    const [firstName, setFirstName] = useState("");
    const [comments, setComments] = useState("");
    const [gender, setGender] = useState("M")
    const [interests, setInterest] = useState([])
    let onUpdateFirstName = (e) => {
        //console.log(e.target.value);
        setFirstName(e.target.value)
    }

    let onUpdateComments = (e) => {
        setComments(e.target.value);
    }

    let onUpdateGender = (e) => {
        setGender(e.target.value);
    }

    let onUpdateInterests = (e) => {
        // make a copy of the original array
        let copy = [...interests];

        // if the interest is not in array, then we add
        if (!copy.includes(e.target.value)) {
        // add the new interest into the copy
            copy.push(e.target.value);

            setInterest(copy);
        } else {
            copy = copy.filter(function(each_interest){
                if (each_interest != e.target.value) {
                    return true;
                }
                return false;
            })
            setInterest(copy);
        }

 

    }

    return (
        <form>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={onUpdateFirstName} value={firstName} />
            </div>
            <div>
                <label>Comments</label>
                <textarea onChange={onUpdateComments} value={comments}/>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" value="M" name="gender" onChange={onUpdateGender} checked={gender=="M"}/>Male
                <input type="radio" value="F" name="gender" onChange={onUpdateGender} checked={gender=="F"}/>Female
            </div>
            <div>
                <label>Interests</label>
                <input type="checkbox" value="singing" name="interests" onChange={onUpdateInterests}/>Singing
                <input type="checkbox" value="dancing" name="interests" onChange={onUpdateInterests}/>Dancing
                <input type="checkbox" value="diving" name="interests" onChange={onUpdateInterests}/>Diving
            </div>



        </form>
    )
}

export default Form;