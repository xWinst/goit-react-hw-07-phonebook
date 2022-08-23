import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/addContact', contact => {
    return {
        payload: {
            ...contact,
            id: nanoid(),
        },
    };
});

export const deleteContact = createAction('contacts/deleteContact');
export const filterContacts = createAction('contacts/filter');
