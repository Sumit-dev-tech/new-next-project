
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ribqqfbvshgcdlumtktl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpYnFxZmJ2c2hnY2RsdW10a3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NTQ5NzUsImV4cCI6MjAyODIzMDk3NX0.GI8zhtH59ItNYL9uyYN0GXgYF-VQrD76ZCpdUhcIaoE');

export default supabase;