export default (() => {
  function LinkedInProfile() {
    return (
      <div 
          className={`badge-base LI-profile-badge`}
          data-locale={"en_US"} 
          data-size={"medium"} 
          data-theme={"dark"} 
          data-type={"VERTICAL"} 
          data-vanity={"josh-ramer"}
          data-version={"v1"}>
      </div>
    );
  }

  return LinkedInProfile
})
