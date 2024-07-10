import { useState } from "react";

const Form = () => {
    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string | number>("");
    const [email, setEmail] = useState<string>("");

    const getVorname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVorname(event.target.value);
      };
    
      // * Age auslesen
      const getNachname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNachname(event.target.value);
      };
    
      // * Happy auslesen
      const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        //   Bei Boolean müssen wir auf checked gehen, da es keinen value hat
        setEmail(event.target.value);
      };

    return (
        <>
        <input onChange={getVorname} type="text" placeholder="vorname" value={vorname} />
        <input onChange={getNachname} type="text" placeholder="nachname" value={nachname}/>
        <input onChange={getEmail} type="text" placeholder="email" value={email}/>
        <br></br>
        {vorname}
        <br></br>
        {nachname}
        <br></br>
        {email}

        </>

      );
}
 
export default Form;