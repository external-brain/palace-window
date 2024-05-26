export default (() => {
  function LinkedInProfile() {
    return (
      <div 
          className={`badge-base LI-profile-badge ${rest?.className}`}
          data-locale={"en_US"} 
          data-size={"medium"} 
          data-theme={"dark"} 
          data-type={"VERTICAL"} 
          data-vanity={"josh-ramer"}
          data-version={"v1"}>
        <script src="https://platform.linkedin.com/badges/js/profile.js"></script>
      </div>
    );
  }

  return LinkedInProfile
})
