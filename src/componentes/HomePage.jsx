import React from 'react';
import './HomePage.css'; 

function HomePage() {
  return (
    <>
      <h1 style={{ color: 'green' }}>Huellas Encuadernación</h1>
      <div className="images-container">
        <img src="ruta/a/imagen1.jpg" alt="Descripción imagen 1" className="home-image" />
        <img src="ruta/a/imagen2.jpg" alt="Descripción imagen 2" className="home-image" />
      </div>
      <div className="about-section">
        <p>
        Descubre la Magia de lo Personalizado en Huellas Encuadernación

Bienvenido a Huellas Encuadernación, donde cada página cuenta una historia, cada diseño lleva una emoción, y cada producto es un reflejo de tu individualidad.
 Somos más que una tienda de papelería online; somos creadores de espacios donde tus ideas, recuerdos y sueños encuentran su hogar.

Nuestra misión es simple: transformar lo ordinario en extraordinario, lo cotidiano en inolvidable. Con una amplia gama de agendas escolares, planificadores, y 
cuadernos personalizados, ofrecemos una variedad de tamaños y estilos para acompañarte en cada faceta de tu vida. ¿Buscas algo que capture la esencia de tu 
trabajo, estudios, o simplemente la alegría de los días? Navega por nuestra tienda y déjate seducir por nuestros creativos y únicos diseños.

Pero, ¿qué sucede si entre nuestra colección no encuentras ese diseño que te roba el aliento? Ahí es donde la magia de la personalización cobra vida. Contáctanos. 
Cuéntanos qué estás buscando, qué sueñas, qué necesitas. Juntos, daremos forma a ese deseo, creando algo exclusivamente para ti.

Nuestra pasión no se detiene en los colores, formas o texturas. En Huellas Encuadernación, llevamos el amor por las mascotas a un nuevo nivel. ¿Tienes a tu regalón
 o regalona y deseas llevarlo contigo a todas partes? Envíanos su foto, y materializaremos ese amor en la agenda perfecta, para que cada vez que la abras, sientas
  la compañía de tu fiel amigo.

En Huellas Encuadernación, creemos en el poder de lo personal, en la emoción de lo único, y en la belleza de compartir la vida con mascotas. Te invitamos a ser 
parte de esta aventura creativa. Descubre, sueña, personaliza y lleva contigo no solo una papelería de calidad, sino un pedacito de alma.

Visita nuestra tienda hoy y comienza el viaje hacia lo inimaginable.
        </p>
      </div>
    </>
  );
}

export default HomePage;
