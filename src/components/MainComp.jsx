import { useState, useEffect } from "react";
import CardComp from "./CardComp";

export default function MainComp() {

    const initialFormData = {
        title: '',
        slug: '',
        image: '',
        content: '',
        tags: [3]
        //published: '',
      }
    
      const [formData, setFormData] = useState(initialFormData);
      const [form, setForm] = useState(false)
    
      function createFormData(newValue, fieldName) {
        //clono l'ogetto e uso lo spread per eliminare lo stato attuale
        const newFormData = { ...formData };
    
        //aggiorno la chiave e il valore
        newFormData[fieldName] = newValue
    
        //passi l'ogetto modificato a setFormData
        setFormData(newFormData)
      }

      function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:3000/post", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    
        //resetto form
        setFormData(initialFormData)
      }

      function handleToggle(){
        if(form == false){
            setForm(true)
        }else{
            setForm(false)
        }
        console.log(form)
      }

    return (
        <>
            <main className="relative flex flex-wrap justify-around">
                
                    <CardComp></CardComp>
                
                
                {/* il form vien mostrato soltanto se la variabile form è true */}
            {form ? 
                <div className="absolute top-5 bg-sky-200 rounded py-10  w-1/3">
                    <form className='flex justify-around flex-col w-2/4 h-2/6 mx-auto' onSubmit={handleSubmit}>
                        <input className='border-solid border-2 border-black rounded mb-1' type="text" name="title" placeholder="inserisci il titolo" value={formData.title} onChange={(e) => createFormData(e.target.value, 'title')} />
                        <input className='border-solid border-2 border-black rounded mb-1' type="text" name="slug" placeholder='inserisci lo slug' value={formData.slug} onChange={(e) => createFormData(e.target.value, 'slug')} />
                        <input className='border-solid border-2 border-black rounded mb-1' type="text" name="image" placeholder="inserisci URL image" value={formData.image} onChange={(e) => createFormData(e.target.value, 'image')} />
                        <input className='border-solid border-2 border-black rounded mb-1' type="text" name="content" placeholder='inserisci il contenuto' value={formData.content} onChange={(e) => createFormData(e.target.value, 'content')} />
                        {/* <div className='flex justify-start items-center mb-2'>
                            <input name='published' cheked={formData.published} type="checkbox" onChange={(e) => createFormData(e.target.checked, 'published')} /><span>Published</span>
                        </div> */}
                        <button className='bg-blue-500 p-2 rounded text-white mb-2'>Aggiungi</button>
                    </form>
                </div>
            : null}
                
            {/* btn dinamico all'apertura e alla chiusura del form */}
            {form ? 
                <button className="px-3 py-2 bg-blue-500 text-white rounded fixed bottom-5 right-5" onClick={handleToggle}>Chiudi form</button> 
                : <button className="px-3 py-2 bg-blue-500 text-white rounded fixed bottom-5 right-5" onClick={handleToggle}>Aggiungi Post</button> 
            }
                
            </main>
        </>
    )
}