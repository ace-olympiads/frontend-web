export function extractEmbedIdFromYouTubeLink(url: string) {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|youtu\.be\/|\/v\/|watch\?v%3D|watch\?feature=player_embedded&v=|%2Fvideos%2F|embed%\?i=|%2Fv%2F|e\/|embed\?video_id=|user\/)([^\#\&\?\/\s]{11})/;
    const match = url.match(regex);
  
    if (match && match.length > 1) {
      return match[1];
    }
  
    return null; // Return null if no embedId is found
  
  }

  