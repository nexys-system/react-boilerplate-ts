import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  margin-bottom: 30px;
  padding: 24px;
`;

const ErrorMessage = styled.p`
  background-color: rgba(256, 256, 256);
  text-align: 'center';
`;

export { ErrorContainer, ErrorMessage };
