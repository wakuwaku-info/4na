 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
new file mode 100644
index 0000000000000000000000000000000000000000..9d5c84b68638a4305bcead0c18bf2b57d65f928f
--- /dev/null
+++ b/script.js
@@ -0,0 +1,17 @@
+const targets = document.querySelectorAll('.reveal');
+
+const observer = new IntersectionObserver(
+  (entries) => {
+    entries.forEach((entry) => {
+      if (entry.isIntersecting) {
+        entry.target.classList.add('visible');
+      }
+    });
+  },
+  {
+    threshold: 0.18,
+    rootMargin: '0px 0px -10% 0px',
+  }
+);
+
+targets.forEach((el) => observer.observe(el));
 
EOF
)
