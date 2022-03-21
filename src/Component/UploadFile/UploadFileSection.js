import { Form, Button } from 'react-bootstrap';

const UploadFileSection = ({ handleInputFile, handleSubmit }) => {
  return (
    <main>
      <section className='upload-file-section'>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formFileLg'>
            <Form.Label className='mt-2'>
              <h1>Upload your file .dat</h1>
            </Form.Label>
            <Form.Control
              type='file'
              size='lg'
              onChange={handleInputFile}
              accept='.dat'
            />
          </Form.Group>
          <div className='button-box'>
            <Button variant='primary' type='submit'>
              Get your result
            </Button>
          </div>
        </Form>
      </section>
    </main>
  );
};

export default UploadFileSection;
