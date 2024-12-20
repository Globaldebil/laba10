import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function DeleteButton({ onClick }) {
  return (
    <button
      onClick={() => onClick()}
      style={{
        backgroundColor: '#e74c3c',
        color: '#fff',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <FontAwesomeIcon icon={faTrash} />
      Удалить
    </button>
  );
}

export default DeleteButton;
