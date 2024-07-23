import React from 'react'

const page = () => {
  return (
    <>
      <h1 className='heading'>Impressum</h1>
      <h2 className='text-2xl my-2'>Diensteanbieter</h2>
      <p className='text-sm'>Patrick Steger - IT Beratung<br />Warschauer Str. 12A<br />10243 Berlin</p>
      
      <h2 className='text-2xl my-2'>Kontaktmöglichkeiten</h2>
      <p>
        E-Mail-Adresse: <a href="mailto:ps@psteger.com">ps@psteger.com</a><br />
        Telefon: 030 209667060
      </p>
      
      <h2 className='text-2xl my-2'>Angaben zum Unternehmen</h2>
      <p className='text-sm'>Umsatzsteuer Identifikationsnummer (USt-ID): DE323289298</p>
      
      <h2 className='text-2xl my-2'>Social Media und andere Onlinepräsenzen</h2>
      <p className='text-sm'>Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile: </p>
      <p className='text-sm'><a href="https://www.linkedin.com/in/p-steger/" target="_blank">https://www.linkedin.com/in/p-steger/</a></p>
  
      <p className='text-xs'><a href="https://datenschutz-generator.de/" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow">Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a></p>
    </>
  )
}

export default page