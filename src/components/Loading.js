import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
      <div className='d-flex justify-content-center justify-items-center mt-5'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
};

export default Loading;