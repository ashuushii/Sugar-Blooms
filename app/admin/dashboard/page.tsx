"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signOut, useSession } from "next-auth/react";

export default function AdminDashboard() {
  const router = useRouter();
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    // Validate current password (this should match the login password)
    if (passwordForm.currentPassword !== "sugarbloomsadmin") {
      setPasswordError("Current password is incorrect");
      return;
    }

    // Validate new password
    if (passwordForm.newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters long");
      return;
    }

    // Validate password confirmation
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New passwords do not match");
      return;
    }

    // In a real application, you would make an API call to update the password
    // For this example, we'll just show a success message
    setPasswordSuccess("Password changed successfully!");
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/admin" });
  };

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push("/admin");
    return null;
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-pink-600 font-serif">
              Admin Dashboard
            </h1>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-pink-200 text-pink-600 hover:bg-pink-50"
            >
              Logout
            </Button>
          </div>

          <div className="grid gap-6">
            {/* Password Change Section */}
            <div className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-pink-600">
                  Security Settings
                </h2>
                <Button
                  onClick={() => setShowChangePassword(!showChangePassword)}
                  variant="outline"
                  className="border-pink-200 text-pink-600 hover:bg-pink-50"
                >
                  {showChangePassword ? "Cancel" : "Change Password"}
                </Button>
              </div>

              {showChangePassword && (
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  {passwordError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                      {passwordError}
                    </div>
                  )}
                  {passwordSuccess && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                      {passwordSuccess}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-pink-600">
                      Current Password
                    </label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={passwordForm.currentPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                      className="border-pink-200 focus:border-pink-400 text-pink-700"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="newPassword" className="block text-sm font-medium text-pink-600">
                      New Password
                    </label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={passwordForm.newPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                      className="border-pink-200 focus:border-pink-400 text-pink-700"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-pink-600">
                      Confirm New Password
                    </label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={passwordForm.confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                      className="border-pink-200 focus:border-pink-400 text-pink-700"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-medium"
                  >
                    Update Password
                  </Button>
                </form>
              )}
            </div>

            {/* Admin Features */}
            <div className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-pink-600 mb-4">
                Orders Management
              </h2>
              <p className="text-pink-700">
                Order management features will be added here.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-pink-600 mb-4">
                Content Management
              </h2>
              <p className="text-pink-700">
                Content management features will be added here.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-pink-600 mb-4">
                Customer Inquiries
              </h2>
              <p className="text-pink-700">
                Customer inquiries and messages will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
