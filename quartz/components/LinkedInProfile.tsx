import LinkedInProfileBadge from 'react-linkedin-profile-badge';

export default (() => {
  function LinkedInProfile() {
    return (
      <div>
        <LinkedInProfileBadge profileId='josh-ramer' theme='dark' size='large' orientation='horizontal' />
      </div>
    )
  }

  return LinkedInProfile
})
