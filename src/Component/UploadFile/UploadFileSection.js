import { Form } from 'react-bootstrap';

const UploadFileSection = ({ handleInputFile, result }) => {
  return (
    <main>
      <section className='w-75 mt-4 ms-auto me-auto'>
        <Form>
          <Form.Group controlId='formFileLg'>
            <Form.Label className='mt-2'>
              <h1 className='mb-4'>Upload your file .dat</h1>
            </Form.Label>
            <Form.Control
              type='file'
              size='lg'
              onChange={handleInputFile}
              accept='.dat'
            />
          </Form.Group>
          <div className='mt-5'>
            <h2>
              {result &&
                `The day with the smallest temperature range is: The day number ${result}`}
            </h2>
          </div>
        </Form>
      </section>
    </main>
  );
};

export default UploadFileSection;
