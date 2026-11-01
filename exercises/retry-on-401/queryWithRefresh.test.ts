import { describe, expect, it, vi } from "vitest";
import { queryWithRefresh } from "./queryWithRefresh";

describe("queryWithRefresh", () => {
  it("does not refresh a successful call", async () => {
    const send = vi.fn().mockResolvedValue({ status: 200 });
    const refresh = vi.fn();
    await expect(queryWithRefresh("/items", { send, refresh })).resolves.toEqual({ status: 200 });
    expect(send).toHaveBeenCalledTimes(1);
    expect(refresh).not.toHaveBeenCalled();
  });

  it("refreshes once and replays a 401", async () => {
    const send = vi.fn().mockResolvedValueOnce({ status: 401 }).mockResolvedValueOnce({ status: 200 });
    const refresh = vi.fn().mockResolvedValue(true);
    await expect(queryWithRefresh("/items", { send, refresh })).resolves.toEqual({ status: 200 });
    expect(refresh).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledTimes(2);
  });

  it("does not replay when refresh fails", async () => {
    const send = vi.fn().mockResolvedValue({ status: 401 });
    const refresh = vi.fn().mockResolvedValue(false);
    await expect(queryWithRefresh("/items", { send, refresh })).resolves.toEqual({ status: 401 });
    expect(send).toHaveBeenCalledTimes(1);
    expect(refresh).toHaveBeenCalledTimes(1);
  });

  it("does not refresh a second time when the replay is also 401", async () => {
    const send = vi.fn().mockResolvedValue({ status: 401 });
    const refresh = vi.fn().mockResolvedValue(true);
    await expect(queryWithRefresh("/items", { send, refresh })).resolves.toEqual({ status: 401 });
    expect(refresh).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledTimes(2);
  });

  it("does not refresh a 403", async () => {
    const send = vi.fn().mockResolvedValue({ status: 403 });
    const refresh = vi.fn();
    await expect(queryWithRefresh("/items", { send, refresh })).resolves.toEqual({ status: 403 });
    expect(refresh).not.toHaveBeenCalled();
    expect(send).toHaveBeenCalledTimes(1);
  });
});
