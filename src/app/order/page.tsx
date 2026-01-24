"use client";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Divider,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function UnitOrderForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const newErrors: Record<string, string> = {};

    if (!data.get("srNumber")) newErrors.srNumber = "SR Number is required";
    if (!data.get("barrackNumber"))
      newErrors.barrackNumber = "Barrack Number is required";
    if (!data.get("barrackName"))
      newErrors.barrackName = "Barrack Name is required";

    const mobile = data.get("mobile")?.toString() || "";
    if (!/^[6-9]\d{9}$/.test(mobile))
      newErrors.mobile = "Enter valid 10-digit mobile number";

    if (!data.get("shoeModel"))
      newErrors.shoeModel = "Select shoe model";

    if (!data.get("shoeSize")) newErrors.shoeSize = "Select shoe size";

    if (!data.get("address") || data.get("address")!.toString().length < 10)
      newErrors.address = "Address is too short";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!validate(formData)) return;

    console.log(Object.fromEntries(formData.entries()));
    alert("Unit order submitted successfully!");
    e.currentTarget.reset();
  };

  return (
    <Card sx={{ maxWidth: 900, mx: "auto", mt: 4 }} elevation={5}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Unit / Barrack Shoe Order
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Delivery Time: <b>7 Working Days</b>
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Unit Details */}
          <Typography variant="h6">Unit Details</Typography>
          <Divider sx={{ my: 2 }} />

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
            gap={3}
          >
            <TextField
              name="srNumber"
              label="SR Number"
              error={!!errors.srNumber}
              helperText={errors.srNumber}
            />
            <TextField
              name="barrackNumber"
              label="Barrack Number"
              error={!!errors.barrackNumber}
              helperText={errors.barrackNumber}
            />
            <TextField
              name="barrackName"
              label="Barrack Name"
              error={!!errors.barrackName}
              helperText={errors.barrackName}
            />
          </Box>

          {/* Shoe Details */}
          <Typography variant="h6" mt={4}>
            Shoe Details
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
            gap={3}
          >
            <TextField
              name="shoeModel"
              label="Shoe Model"
              select
              error={!!errors.shoeModel}
              helperText={errors.shoeModel}
            >
              <MenuItem value="Police Duty Shoe">Police Duty Shoe</MenuItem>
              <MenuItem value="Combat Boot">Combat Boot</MenuItem>
              <MenuItem value="Parade Shoe">Parade Shoe</MenuItem>
            </TextField>

            <TextField
              name="shoeSize"
              label="Shoe Size"
              select
              error={!!errors.shoeSize}
              helperText="Girls size available: 5"
            >
              {[5, 6, 7, 8, 9, 10, 11, 12].map((size) => (
                <MenuItem key={size} value={size}>
                  Size {size}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              name="quantity"
              label="Quantity"
              type="number"
              defaultValue={1}
            />
          </Box>

          {/* Contact */}
          <Typography variant="h6" mt={4}>
            Contact & Delivery
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Box display="grid" gap={3}>
            <TextField
              name="mobile"
              label="Mobile Number"
              error={!!errors.mobile}
              helperText={errors.mobile}
            />

            <TextField
              name="address"
              label="Delivery Address"
              multiline
              rows={3}
              error={!!errors.address}
              helperText={errors.address}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 4, py: 1.6, fontSize: "1.1rem", fontWeight: "bold" }}
          >
            Submit Unit Order
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
