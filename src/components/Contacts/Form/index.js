import {useState, useEffect} from "react";

const initialFormValues = {fullname: "", phone_number: ""};

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();                                      //Bütün sayfanın değil, sadece değişen kısmın yenilenmesini sağladık.

    if (form.fullname === "" || form.phone_number === ""){  //Bilgi girişi olmadıysa veri göndermeye çalışmasın.
      return false;
    }

    addContact([...contacts,form]);
  };

  return(

    <form onSubmit ={onSubmit}>
      <div>
        <input 
          name="fullname" 
          placeholder='Full Name' 
          value={form.fullname}
          onChange={onChangeInput} 
        />
      </div>

      <div>
        <input 
          name="phone_number" 
          placeholder='Phone Number'
          value={form.phone_number} 
          onChange={onChangeInput} 
        />
      </div>

     <div className="btn">
       <button>Add</button>
      </div>
    </form>
  );
}

export default Form; 

/*Kayıtları bir state'e eklemeliyiz ki onu List Componentinde listeleyebilelim.Eğer kullanıcı kayıtlarını Form Componenti 
içinde bir state'te tutarsam bu state' List Componentine nasıl taşıyacağım?Böyle bir problemimiz var.Kullanıcıların ekleneceği
state'i Contacts Componentinde tutarsak ve bu state'e set işlemi yapacak olan fonksiyonu eğer Form Componentine geçersem 
problem kalmayacak.*/ 