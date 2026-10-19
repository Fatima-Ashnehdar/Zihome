import { toRialMoney } from "@/app/(web)/products/(shop)/utils";

import picture from "@public/pictures/dashboard/picture.png";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";

import { mockInvoices } from "../../data/mock-orders";

export function HistoryTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-base text-gray-800 text-right pr-4">ردیف</TableHead>
          <TableHead className="text-base text-gray-800 text-right pr-7">شماره سفارش</TableHead>
          <TableHead className="text-base text-gray-800 text-right pr-7">تاریخ</TableHead>
          <TableHead className="text-base text-gray-800 text-right pr-7">مبلغ</TableHead>
          <TableHead className="text-base text-gray-800 text-right pr-2">وضعیت</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockInvoices.map((invoice) => (
          <TableRow key={invoice.row}>
            <TableCell className="text-sm text-gray-900 py-6 pr-8">{invoice.row}</TableCell>
            <TableCell className="text-sm text-gray-900 py-6 pr-8">{invoice.orderNumber}</TableCell>
            <TableCell className="text-sm text-gray-900 py-6 pr-8">{invoice.date}</TableCell>
            <TableCell className="text-sm text-gray-900 py-6 pr-8">
              {toRialMoney(invoice.amount)} تومان
            </TableCell>
            <TableCell className="text-sm text-gray-900 py-6">{invoice.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    // <div className="flex flex-col items-center gap-y-4 w-full py-5">
    //   <Image src={picture} alt="note" />
    //   <p className="text-base text-gray-800">هنوز سفارشی ثبت نکرده اید</p>
    // </div>
  );
}
