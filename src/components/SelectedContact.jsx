import { useEffect } from "react";

const SelectedContact = ({selectedContactId}) => {

    const [contactDetails, setContactsDetails] = useState ({});

    useEffect(() => {
        try{
        const fetchContactDetails = async () => {
            const response = await fetch(`https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`);
            const data = await response.json();
            console.log('DATA, data');
            setContactsDetails(data);
        };
        fetchContactDetails();
        }catch (error) {
            console.error;
        }
    }, []);

    return contactDetails ?(
    <>
        <h2>Contact Details for {contactDetails.name}</h2> : <h2>Loading...</h2>
        <h3>Company: {contactDetails.company.name}</h3>
        <h3>Company Catchphrase: {contactDetails.company.catchPhrase}</h3>
        </>
    ) : (
        <h2>Loading...</h2>
    );
};

export default SelectedContact;