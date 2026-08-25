import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  { ignores: ["legacy-static/**", "out/**"] },
];

export default eslintConfig;
