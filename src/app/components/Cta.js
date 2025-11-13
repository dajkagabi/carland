'use client';

import React from 'react';
import Image from 'next/image'

export default function Cta() {
  const styles = {
    ctaSection: {
      padding: '60px 20px',
      background: 'white',
      color: 'black',
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '50px',
    },
    content: {
      flex: '1',
      maxWidth: '500px',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '15px',
      lineHeight: '1.2',
      color: 'black',
    },
    description: {
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '30px',
      opacity: '0.8',
      color: 'black',
    },
    buttonsContainer: {
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
    },
    downloadButton: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      padding: '0',
    },
    buttonImage: {
      width: '160px',
      height: 'auto',
      display: 'block',
    },
    imageContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      maxWidth: '250px',
      width: '100%',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.ctaSection} id="cta">
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>
            Download our App now and<br />
            hit the road with ease
          </h2>
          <p style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam<br />
            recusandae fataug, similique quidem aperiam sunt dolorum quam<br />
            fugit quibusdam reidentdis.
          </p>
          
          <div style={styles.buttonsContainer}>
            <button 
              style={styles.downloadButton}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Image
                src="/images/buttons/app.png" 
                alt="Download on App Store"
                style={styles.buttonImage}
                width={160} 
                height={53} 
              />
            </button>
            
            <button 
              style={styles.downloadButton}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Image
                src="/images/buttons/google.png" 
                alt="Get it on Google Play"
                style={styles.buttonImage}
                width={160} 
                height={53} 
              />
            </button>
          </div>
        </div>

        <div style={styles.imageContainer}>
          <img 
            src="/images/cta/cta.png" 
            alt="Carland App Preview"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
}