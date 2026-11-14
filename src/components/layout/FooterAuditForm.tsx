"use client";

import { footerForm } from "@/data/seo-content";
import { Button } from "@/components/ui/Button";

export function FooterAuditForm() {
  return (
    <form
      className="or-surface-card rounded-2xl p-6"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Free link audit request"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={footerForm.fields.name} name="name" type="text" />
        <Field
          label={footerForm.fields.email}
          name="email"
          type="email"
          required
        />
      </div>
      <div className="mt-4">
        <Field
          label={footerForm.fields.website}
          name="website"
          type="url"
          required
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-or-body">
          {footerForm.fields.message}
          <textarea
            name="message"
            rows={4}
            className="mt-2 w-full rounded-xl border border-white/10 bg-or-canvas/80 px-3 py-2 text-sm text-white placeholder:text-or-muted/60 focus:border-or-orange/50 focus:outline-none"
          />
        </label>
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto" variant="primary">
        {footerForm.submitLabel}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-or-body">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-or-canvas/80 px-3 py-2 text-sm text-white placeholder:text-or-muted/60 focus:border-or-orange/50 focus:outline-none"
      />
    </label>
  );
}
