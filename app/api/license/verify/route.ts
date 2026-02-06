import { NextRequest, NextResponse } from 'next/server';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { license_key } = body;

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (!license_key) {
      return NextResponse.json(
        { valid: false, error: 'License key is required' }, 
        { status: 400, headers: corsHeaders }
      );
    }

    const apiKey = process.env.WHOP_API_KEY;
    if (!apiKey) {
      console.error('WHOP_API_KEY is not configured');
      return NextResponse.json(
        { valid: false, error: 'Server configuration error' }, 
        { status: 500, headers: corsHeaders }
      );
    }

    // Whop API: Validate License
    const response = await fetch(`https://api.whop.com/api/v2/memberships/validate_license/${license_key}?metadata=true`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      // Handle non-200 responses (e.g., 404 if invalid)
      const errorText = await response.text();
      console.error('Whop API Error:', response.status, errorText);
      
      if (response.status === 404) {
         return NextResponse.json(
           { valid: false, error: 'Invalid license key' },
           { headers: corsHeaders }
         );
      }
      return NextResponse.json(
        { valid: false, error: 'Validation failed' },
        { headers: corsHeaders }
      );
    }

    const data = await response.json();

    // Whop returns 'valid: true' if active.
    // We can also check status specifically.
    if (data.valid === true) {
      return NextResponse.json({
        activated: true, // Matching existing LicenseService expectation
        valid: true,
        license_key: license_key,
        instance: {
            id: data.id
        },
        meta: {
            // Map Whop metadata to our expected format if possible
            customer_email: data.email,
            customer_name: data.discord?.username || data.email?.split('@')[0] || 'Trader',
            product_name: 'LocalAlpha Pro'
        }
      }, { headers: corsHeaders });
    } else {
        return NextResponse.json({ 
            valid: false, 
            error: 'License is inactive or expired',
            status: data.status 
        }, { headers: corsHeaders });
    }

  } catch (error: any) {
    console.error('License verification error:', error);
    return NextResponse.json(
      { valid: false, error: error.message }, 
      { status: 500, headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }}
    );
  }
}
