import {  useState } from "react";
import { Button, Form, Header, Input, Span } from "./Searchbar.styled";
import PropTypes from 'prop-types';

export function Searchbar ({onSubmit}) {
    const [name, setName] = useState("") 

const handleInputChange = event => {
    setName(event.currentTarget.value)
  }

 const reset = () => {
        setName("")
     }
 
 return(
            
            <Header>
              <Form 
              onSubmit={(e) => 
                {e.preventDefault();
                onSubmit(name);
                reset()}}>
                <Button type="submit">
<Span>Search</Span>
                </Button>
<Input
name="name"
value={name}
onChange={handleInputChange}
type="text"
autoComplete="off"
autoFocus
placeholder="Search images and photos"/>
                </Form>  
            </Header>
        )
    }



Searchbar.propTypes = {
    onSubmit: PropTypes.func,
}