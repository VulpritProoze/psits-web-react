import { Outlet } from "react-router";
import { Header } from "@/student-web/components/common/Header";
import { Footer } from "@/student-web/components/common/Footer";
import CartProvider from "@/student-web/context/cart-context";
import TransactionsProvider from "@/student-web/context/transactions-context";
import { Toaster } from '@/shared/components/ui/sonner';

export const MainLayout = () => {
  return (
    <TransactionsProvider>
      <CartProvider>
        <div className="flex min-h-screen flex-col overflow-x-clip bg-gray-50/50">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </CartProvider>
    </TransactionsProvider>
  );
};
