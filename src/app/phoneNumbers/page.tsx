"use client"
import React, { useEffect, useState } from 'react';

interface Form {
    name: string;
    phoneNumber: string;
    gustes: number;
    weddingdate: string;
    reserveddate: string;
    menue: string;
}

const FormsPage = () => {
    const [forms, setForms] = useState<Form[]>([]);

    useEffect(() => {
        const fetchForms = async () => {
            const response = await fetch('/api/forms');
            if (response.ok) {
                const data = await response.json();
                setForms(data);
            } else {
                console.error('Failed to fetch forms');
            }
        };

        fetchForms();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-6">لیت مخاطبین</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">نام مشتری</th>
                            <th className="py-3 px-6 text-left">شماره تماس</th>
                            <th className="py-3 px-6 text-left">تعداد میهمان</th>
                            <th className="py-3 px-6 text-left">تاریخ عروسی</th>
                            <th className="py-3 px-6 text-left">تاریخ حضور</th>
                            <th className="py-3 px-6 text-left">منو مد نظر</th>
                            <th className="py-3 px-6 text-left">تماس با مشتری</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {forms.map((form, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{form.name}</td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">{form.phoneNumber}</td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">{form.gustes}</td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    {new Date(form.weddingdate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    {new Date(form.reserveddate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap" dir='rtl'>{form.menue}</td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <a
                                        href={`tel:${form.phoneNumber}`}
                                        className="text-blue-500 hover:underline flex items-center"
                                    >
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 10h2l2-2m2 0h2l2 2m2 0h2l2-2m-2 4h-2l-2 2m-2 0h-2l-2-2m-2 0H3m10 8h2l2-2m2 0h2l2 2m-2-4h-2l-2-2m-2 0h-2l-2 2m-2 0H3m10-12h2l2 2m2 0h2l2-2m-2 4h-2l-2-2m-2 0h-2l-2 2M3 6h2l2 2m2 0h2l2-2m2 0h2l2 2M3 14h2l2-2m2 0h2l2 2m2 0h2l2-2"
                                            />
                                        </svg>
                                        Call
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FormsPage;
