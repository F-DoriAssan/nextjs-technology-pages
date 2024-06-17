import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  fetchCustomers,
  fetchInvoiceById,
} from 'src/app/[locale]/lib/data';
import Breadcrumbs from 'src/app/[locale]/ui/invoices/breadcrumbs';
import Form from 'src/app/[locale]/ui/invoices/edit-form';

export const metadata: Metadata = {
  title: 'Edit Invoices',
};

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
      fetchInvoiceById(id),
      fetchCustomers(),
    ]);
    if (!invoice) {
        notFound();
      }
    
    return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}