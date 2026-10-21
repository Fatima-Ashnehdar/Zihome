/**@format */

import { toRialMoney } from "@/app/(web)/products/(shop)/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { invoices, statusStyles } from "../../data/mock-wallet";

export function TransactionsTable() {
  return (
    <Table className="mt-[4%]">
      <TableHeader>
        <TableRow>
          <TableHead className="text-base text-gray-800 text-right pr-4">ردیف</TableHead>
          <TableHead className="text-base text-gray-800 text-right pr-7">تاریخ</TableHead>
          <TableHead className="text-base text-gray-800 text-right pr-7">مبلغ</TableHead>
          <TableHead className="text-base text-gray-800 text-right pr-7">درگاه بانکی</TableHead>
          <TableHead className="text-base text-gray-800 text-right pr-2">وضعیت</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.row}>
            <TableCell className="text-sm text-gray-900 py-6 pr-8">{invoice.row}</TableCell>
            <TableCell className="text-sm text-gray-900 py-6 pr-8">{invoice.date}</TableCell>
            <TableCell className="text-sm text-gray-900 py-6 pr-8">
              {toRialMoney(invoice.amount)} تومان
            </TableCell>
            <TableCell className="text-sm text-gray-900 py-6 pr-8">{invoice.bank}</TableCell>
            <TableCell className="py-6">
              <p
                className={`text-center w-[60%] rounded-full px-3 py-3 text-xs ${
                  statusStyles[invoice.status] ?? "bg-gray-100 text-gray-600"
                }`}
              >
                {invoice.status}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
