"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = sessionStorage.getItem("isAdminAuthenticated");
    if (!authStatus) {
      window.location.href = "/admin";
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    // Add proper validation and API call here
    if (passwordForm.currentPassword !== "sugarbloomsadmin") {
      setPasswordError("Current password is incorrect");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New passwords do not match");
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters long");
      return;
    }

    // Success (replace with actual API call in production)
    setPasswordSuccess("Password changed successfully");
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setShowChangePassword(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminAuthenticated");
    window.location.href = "/admin";
  };

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen pt-48 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-pink-200 p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-pink-600 font-serif">
                Admin Dashboard
              </h1>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-pink-200 text-pink-600 hover:text-pink-700 hover:bg-pink-50"
              >
                Logout
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-pink-50 rounded-xl p-4">
                <h3 className="text-pink-600 font-medium mb-2">Total Orders</h3>
                <p className="text-2xl font-bold text-pink-700">0</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-4">
                <h3 className="text-pink-600 font-medium mb-2">
                  Pending Orders
                </h3>
                <p className="text-2xl font-bold text-pink-700">0</p>
              </div>
              <div className="bg-pink-50 rounded-xl p-4">
                <h3 className="text-pink-600 font-medium mb-2">
                  Today's Revenue
                </h3>
                <p className="text-2xl font-bold text-pink-700">£0</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <Button
                onClick={() => setShowChangePassword(!showChangePassword)}
                className="w-full md:w-auto border-pink-200 text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                variant="outline"
              >
                Change Password
              </Button>

              {showChangePassword && (
                <form
                  onSubmit={handlePasswordChange}
                  className="mt-4 bg-pink-50 rounded-xl p-6 space-y-4"
                >
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
                    <label
                      htmlFor="currentPassword"
                      className="block text-sm font-medium text-pink-600"
                    >
                      Current Password
                    </label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={passwordForm.currentPassword}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          currentPassword: e.target.value,
                        })
                      }
                      className="border-pink-200 focus:border-pink-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="newPassword"
                      className="block text-sm font-medium text-pink-600"
                    >
                      New Password
                    </label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={passwordForm.newPassword}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          newPassword: e.target.value,
                        })
                      }
                      className="border-pink-200 focus:border-pink-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-pink-600"
                    >
                      Confirm New Password
                    </label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={passwordForm.confirmPassword}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="border-pink-200 focus:border-pink-400"
                      required
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-medium"
                    >
                      Change Password
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setShowChangePassword(false)}
                      variant="outline"
                      className="border-pink-200 text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
