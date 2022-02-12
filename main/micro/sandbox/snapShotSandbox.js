// 快照沙箱, 適用於低版本瀏覽器, 性能較差, 每次激活、銷毀都會複製、遍歷 window 全部屬性
export class SnapShotSandbox {
  constructor() {
    this.proxy = window
    this.active()
  }

  // 將 window 所有屬性記錄到 snapshot
  active() {
    this.snapshot = new Map()
    for (const key in window) {
      this.snapshot[key] = window[key]
    }
  }

  inactive() {
    for (const key in window) {
      if (window[key] !== this.snapshot[key]) {
        // 還原
        window[key] = this.snapshot[key]
      }
    }
  }
}
