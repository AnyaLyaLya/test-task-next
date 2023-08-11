import './contact.scss';
import Form from '@/components/Form/Form';
import ContactInfo from '@/components/ContactInfo/ContactInfo';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Contact() {
  return (
    <>
      <Header />

      <main className="contact">
        <h1 className='contact__title'>
          Contact Us
        </h1>

        <h3 className='contact__subtitle'>
          Any question or remarks? Just write us a message!
        </h3>

        <div className="contact__block">
          <ContactInfo />

          <Form />
        </div>
      </main>

      <Footer />
    </>    
  )
}