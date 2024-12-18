'use client'
import { Trash2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ContactData = () => {
    const [contacts, setContacts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchContacts(page: number) {
            const data = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/contact?page=${page}`, {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'acctovista': process.env.NEXT_PUBLIC_ACCTOVISTA_KEY!
                }
            });
            try {
                const result = await data.json();
                const sortedContacts = result.contacts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                setContacts(sortedContacts);
                setTotalPages(result.totalPages);
                setCurrentPage(result.currentPage);
            } catch (error) {
                console.error('Failed to parse JSON:', error);
            }
        }
        fetchContacts(currentPage);
    }, [currentPage]);

    const handleDelete = async (id: string) => {
        const confirm = window.confirm('Are you sure you want to delete this contact?');
        if (confirm) {
            setContacts(contacts.filter((contact: any) => contact._id !== id));
            const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/contact?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'acctovista': process.env.NEXT_PUBLIC_ACCTOVISTA_KEY!
                }
            });
            if (res.status === 204) {
                alert('Contact Deleted Successfully');
            } else {
                alert('Error Deleting the Contact');
                console.error('Error Deleting the Contact:', res);
            }
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className='overflow-x-hidden w-[90%]'>
            <table className='min-w-full bg-white border border-gray-200 text-sm'>
                <thead>
                    <tr>
                        <th className='py-2 px-4 border-b'>Sr.No.</th>
                        <th className='py-2 px-4 border-b'>Name</th>
                        <th className='py-2 px-4 border-b'>Email</th>
                        <th className='py-2 px-4 border-b'>Subject</th>
                        <th className='py-2 px-4 border-b'>Query</th>
                        <th className='py-2 px-4 border-b'>Submission Date</th>
                        <th className='py-2 px-4 border-b'>Danger</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact: any, index: number) => (
                        <tr key={contact._id}>
                            <td className='py-2 px-4 border-b text-nowrap'>{index + 1}</td>
                            <td className='py-2 px-4 border-b text-nowrap'>{contact.name}</td>
                            <td className='py-2 px-4 border-b'>{contact.email}</td>
                            <td className='py-2 px-4 border-b'>{contact.subject}</td>
                            <td className='py-2 px-4 border-b'>{contact.query}</td>
                            <td className='py-2 px-4 border-b text-nowrap text-xs'>{new Date(contact.createdAt).toLocaleString()}</td>
                            <td className='py-2 px-4 border-b text-center'>
                                <button onClick={() => handleDelete(contact._id)} className='text-red-500 hover:text-red-700'>
                                    <Trash2Icon className='text-red-400' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-between mt-4'>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ContactData;