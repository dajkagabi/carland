'use client'
import React, { useState, useEffect } from 'react';

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Traveler",
      text: "The premium sedan I rented was perfect for my business meetings. Smooth ride, clean, and the pickup service saved me so much time!",
      country: "USA"
    },
    {
      id: 2,
      name: "Kenji Tanaka",
      role: "Tourist",
      text: "Amazing experience renting a minivan for our family vacation. The car was spacious and fuel-efficient.",
      country: "Japan"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Long-term Rental",
      text: "I rented a compact car for 3 months while relocating. The maintenance service gave me complete peace of mind.",
      country: "Spain"
    },
    {
      id: 4,
      name: "Ahmed Al-Mansoori",
      role: "Luxury Car Client",
      text: "Exceptional service for luxury car rental. The sports car was in perfect condition. Will definitely use again.",
      country: "UAE"
    }
  ];

  const getAvatarUrl = (name) => {
    const seed = name.replace(/\s+/g, '-').toLowerCase();
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=ff6b6b,ff8e8e,ff5252,dc143c,b22222&radius=50`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const styles = {
    testimonialSection: {
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)',
      color: 'white',
      textAlign: 'center',
    },
    testimonialTitle: {
      fontSize: '1.8rem',
      marginBottom: '30px',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    testimonialContainer: {
      position: 'relative',
      maxWidth: '600px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    testimonialSlider: {
      overflow: 'hidden',
      width: '100%',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(139, 0, 0, 0.3)',
    },
    testimonialTrack: {
      display: 'flex',
      transition: 'transform 0.5s ease-in-out',
    },
    testimonialSlide: {
      minWidth: '100%',
      padding: '30px 25px',
      background: 'rgba(255, 255, 255, 0.95)',
      color: '#333',
      borderRadius: '15px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
    },
    testimonialContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
    },
    avatarContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
    },
    avatar: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #DC143C',
    },
    countryFlag: {
      background: 'linear-gradient(135deg, #8B0000, #DC143C)',
      color: 'white',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '0.7rem',
      fontWeight: '600',
      textTransform: 'uppercase',
    },
    testimonialText: {
      fontSize: '0.95rem',
      lineHeight: '1.5',
      fontStyle: 'italic',
      marginBottom: '15px',
      color: '#555',
      fontWeight: '400',
    },
    testimonialAuthor: {
      marginTop: '10px',
    },
    authorName: {
      fontSize: '1rem',
      marginBottom: '4px',
      fontWeight: '600',
      color: '#8B0000',
    },
    authorRole: {
      fontSize: '0.8rem',
      opacity: '0.8',
      fontWeight: '400',
      color: '#666',
    },
    navBtn: {
      background: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      color: '#8B0000',
      fontSize: '1.5rem',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(139, 0, 0, 0.2)',
    },
    testimonialDots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '25px',
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(255, 255, 255, 0.4)',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    dotActive: {
      background: 'white',
      transform: 'scale(1.2)',
    },
  };

  return (
    <div style={styles.testimonialSection} id="testimonial">
      <h2 style={styles.testimonialTitle}>Customer Reviews</h2>
      <div style={styles.testimonialContainer}>
        <button 
          style={styles.navBtn} 
          onClick={prevSlide}
          onMouseOver={(e) => {
            e.target.style.background = 'white';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ‹
        </button>
        {/* */}
        <div style={styles.testimonialSlider}>
          <div 
            style={{...styles.testimonialTrack, transform: `translateX(-${currentSlide * 100}%)`}}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} style={styles.testimonialSlide}>
                <div style={styles.testimonialContent}>
                  <div style={styles.avatarContainer}>
                    <img 
                      src={getAvatarUrl(testimonial.name)} 
                      alt={testimonial.name}
                      style={styles.avatar}
                      onError={(e) => {
                        e.target.src = `https://api.adorable.io/avatars/100/${testimonial.id}.png`;
                      }}
                    />
                    <span style={styles.countryFlag}>{testimonial.country}</span>
                  </div>
                  <p style={styles.testimonialText}>"{testimonial.text}"</p>
                  <div style={styles.testimonialAuthor}>
                    <h4 style={styles.authorName}>{testimonial.name}</h4>
                    <p style={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          style={styles.navBtn} 
          onClick={nextSlide}
          onMouseOver={(e) => {
            e.target.style.background = 'white';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ›
        </button>
      </div>

          {/* */}
      <div style={styles.testimonialDots}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            style={{
              ...styles.dot,
              ...(index === currentSlide ? styles.dotActive : {})
            }}
            onClick={() => goToSlide(index)}
            onMouseOver={(e) => {
              if (index !== currentSlide) {
                e.target.style.background = 'rgba(255, 255, 255, 0.7)';
              }
            }}
            onMouseOut={(e) => {
              if (index !== currentSlide) {
                e.target.style.background = 'rgba(255, 255, 255, 0.4)';
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}