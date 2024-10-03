// Get Patient Profile
const getProfile = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const res = await fetch('http://localhost:3000/api/patients/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      const data = await res.json();
      if (res.ok) {
        // Populate the UI with patient profile data
        document.getElementById('profile-name').textContent = data.name;
        document.getElementById('profile-email').textContent = data.email;
      } else {
        alert('Failed to load profile');
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };
  
  // Update Profile
  document.getElementById('profile-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    try {
      const res = await fetch('http://localhost:3000/api/patients/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ name, email })
      });
  
      if (res.ok) {
        alert('Profile updated successfully');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  });
  