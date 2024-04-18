import React, { useState } from 'react';
import '../Css/highlights.css'; // Import CSS file for styling

function HighlightsPage() {
  // Sample data for 10 videos
  const videosData = [
    { matchNumber: 'Match 1', teams: 'CSK vs RCB', videoUrl: '/path/to/video1.mp4' },
    { matchNumber: 'Match 2', teams: 'MI vs DC', videoUrl: '/path/to/video2.mp4' },
    // Add more video data
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 5;

  // Calculate the index of the last video on the current page
  const indexOfLastVideo = currentPage * videosPerPage;
  // Calculate the index of the first video on the current page
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  // Get the current videos to display
  const currentVideos = videosData.slice(indexOfFirstVideo, indexOfLastVideo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="highlights-page">
      <h1>Highlights</h1>
      <div className="videos-list">
        {currentVideos.map((video, index) => (
          <div key={index} className="video-item">
            <h2>{video.teams}</h2>
            <p>{video.matchNumber}</p>
            <video controls>
              <source src={video.videoUrl} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(videosData.length / videosPerPage) }, (_, index) => index + 1).map((pageNumber) => (
          <button key={pageNumber} onClick={() => paginate(pageNumber)}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HighlightsPage;
