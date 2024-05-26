import LinkedInProfileBadge from 'react-linkedin-profile-badge';

export default ((opts?: Options) => {
  function Footer() {
    return (
      <LinkedInProfile>
        <LinkedInProfileBadge profileId='josh-ramer' theme='dark' size='large' orientation='horizontal' />
      </LinkedInProfile>
    )
  }

  return Footer
