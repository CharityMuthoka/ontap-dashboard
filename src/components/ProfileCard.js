import React from 'react';
import '../styles/styles.css';
import georgeImg from '../assets/george.png';
import edit_2Img from '../assets/edit_2.png';




const ProfileCard = ({ name, title, avatar, banner, onEdit }) => {
  return (
    <div className="profile-card">
      <div 
        className="profile-banner" 
        style={{ backgroundImage: `url(${banner})` }}
      />
      <img className="profile-avatar" src={avatar} alt={`${name} avatar`} />
      
      <div className="profile-info">
        <h4>{name}</h4>
        <p>{title}</p>
      </div>

      

      <button className="edit-button" onClick={onEdit} aria-label="Edit profile">
  <img src={edit_2Img} alt="Edit" className="edit-image" />
</button>

    </div>
  );
};


const ProfileSection = () => (
  <div className="profile-section">
    <ProfileCard
      name="Victor Emefo"
      title="Product Designer"
      avatar={georgeImg}
      banner="/images/banner.jpg"
      onEdit={() => alert('Edit profile clicked')}
    />
  </div>
);


export default ProfileSection;

