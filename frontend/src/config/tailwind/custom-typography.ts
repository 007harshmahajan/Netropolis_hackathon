const variants = {
  // Display
  d1: {
    css: {
      fontSize: "72px",
      lineHeight: "80px",
      letterSpacing: "-0.02em",
    },
  },
  d2: {
    css: {
      fontSize: "60px",
      lineHeight: "68px",
      letterSpacing: "-0.02em",
    },
  },
  d3: {
    css: {
      fontSize: "48px",
      lineHeight: "56px",
      letterSpacing: "-0.02em",
    },
  },
  d4: {
    css: {
      fontSize: "36px",
      lineHeight: "44px",
      letterSpacing: "-0.02em",
    },
  },
  // Title
  t1: {
    css: {
      fontSize: "28px",
      lineHeight: "36px",
      letterSpacing: "-0.01em",
    },
  },
  t2: {
    css: {
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "-0.01em",
    },
  },
  t3: {
    css: {
      fontSize: "20px",
      lineHeight: "28px",
    },
  },
  t4: {
    css: {
      fontSize: "18px",
      lineHeight: "24px",
      letterSpacing: "-0.01em",
    },
  },
  // Body
  b1: {
    css: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "-0.01em",
    },
  },
  b2: {
    css: {
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  // Caption
  c1: {
    css: {
      fontSize: "13px",
      lineHeight: "20px",
      letterSpacing: "0.01em",
    },
  },
  c2: {
    css: {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.01em",
    },
  },
};

const boldVariants = { bold: 700, semibold: 600, medium: 500, regular: 400 };

export const customTypography = Object.entries(variants).reduce(
  (a, [variantLabel, variantValue]) => {
    Object.entries(boldVariants).forEach(
      ([boldVariantLabel, boldVariantValue]) => {
        a[`${variantLabel}-${boldVariantLabel}`] = {
          ...variantValue,
          css: {
            ...variantValue.css,
            fontWeight: boldVariantValue,
          },
        };
      },
    );
    return a;
  },
  {} as Record<string, object>,
);
