export const isRealWebsite = async (url: string): Promise<boolean> => {
  try {
    new URL(url);
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};
